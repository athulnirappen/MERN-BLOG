const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create Post
router.post("/", async (req, res) => {
    const Newpost = await new Post(req.body);
    try {
        const savedpost =await Newpost.save();
        res.status(200).json(savedpost)
    } catch (error) {
        res.status(500).json(error);
    }
    
});

//Update post

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set:req.body
                }, { new: true })
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("You can update only your post");
        }
          
    
  } catch (error) {
      res.status(500).json(error);
  }
});


//Delete post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete()
        res.status(200).json("post has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});



//get post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all posts

router.get("/", async (req, res) => {
    const username = req.query.user;
    const cateName = req.query.category;

  try {
    let posts;
    if (username) {
      posts=await Post.find({username})
      
    } else if (cateName) {
      posts = await Post.find({
        categories: {
        $in:[cateName]
      }})
    } else {
      posts=await Post.find()
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
