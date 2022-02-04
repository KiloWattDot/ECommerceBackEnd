const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try { 
    const tagLists = await Tag.findAll({
      include: {model: Product}
    });
      res.status(200).json(tagLists);
  } catch (err) { 
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try { 
    const tagLists = await Tag.findByPk(req.params.id, {
      include: {model: Product}
    })

    if (tagLists === null) {
      res.status(404).json({ message:'ID Not found!'});
      return;
    } 

    res.status(200).json(tagLists);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try { 
    const tagLists = await Tag.create(req.body);
    res.status(200).json(tagLists);

  } catch (err) {
    res.status(400).json({ message:'Please try again!'});;
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagLists = await Tag.update(req.body, { 
      where: {
        id: req.params.id,
      },
    });
    if (tagLists === 0) {
      res.status(404).json({ message:'ID Not found!'})
      return
    }
    res.status(200).json(tagLists)
  } catch (err) { 
    res.status(500).json(err);
}
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagLists = await Tag.destroy({ 
      where: {
        id: req.params.id,
      },
    });

    if (!tagLists) {
      res.status(404).json({ message:'ID Not found!'})
      return;
    }

    res.status(200).json(tagLists)
  } catch (err) { 
    res.status(500).json(err);
}
});

module.exports = router;
