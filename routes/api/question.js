const express = require('express');
const router = express.Router();


const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Question = require('../../models/Question');

/*
add question route
/api/question
*/

router.post('/',[auth,[
    check('text', 'text is required').not().isEmpty()
]],
async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{


        const user = await User.findById(req.user.id).select('-password');
        
        const newQuestion= new Question({
            user: req.user.id,
            text: req.body.text,
            name: user.name
        });

        const question = await newQuestion.save();

        res.json(question);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});

/*
get all question route
/api/question
*/

router.get('/',auth,
async (req,res)=>{

    try {
        const questions = await Question.find().sort({ date: -1 });
        res.json(questions);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});

/*
get question by id route
/api/question/:id
*/

router.get('/:id',auth,
async (req,res)=>{

    try {
        const question = await Question.findById(req.params.id);

        // Check for ObjectId format and post
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !question) {
          return res.status(404).json({ msg: 'question not found' });
        }
    
        res.json(question);

      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});

/*
delete question by id route
/api/question/delete/:id
*/
router.delete('/delete/:id',auth,
async (req,res)=>{

    try {
        const question = await Question.findById(req.params.id);

        // Check for ObjectId format and post
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !question) {
          return res.status(404).json({ msg: 'question not found' });
        }

        // Check user
        if (question.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
        }
  
        await question.remove();
  
        res.json({ msg: 'Post removed' });
    

      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});


/*
add answer route
/api/question/answer/:id
*/

router.post('/answer/:id',[auth,[
    check('text', 'text is required').not().isEmpty()
]],
async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{


        const user = await User.findById(req.user.id).select('-password');
        const question = await Question.findById(req.params.id);

        const newAnswer= {
            user: req.user.id,
            text: req.body.text,
            name: user.name
        };

        question.answers.unshift(newAnswer);

        await question.save();
  
        res.json(question.answers);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});


module.exports =router;