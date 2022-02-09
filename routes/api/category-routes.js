const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint



router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try { 
    const categoryLists = await Category.findAll({
      include:  { model: Product } 
    });
      res.status(200).json(categoryLists);
  } catch (err) { 
    res.status(500).json(err);
  }
  

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try { 
    const categoryLists = await Category.findByPk(req.params.id, {
      include: {model: Product}, 
    })

    if (categoryLists === null) {
      res.status(404).json({ message:'ID Not found!'});
      return;
    } 

    res.status(200).json(categoryLists);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category.
  try { 
    const categoryLists = await Category.create(req.body);
    res.status(200).json(categoryLists);

  } catch (err) {
    res.status(400).json({ message:'Please try again!'});;
  }

})

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryLists = await Category.update(req.body, { 
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({message: `Updated ${categoryLists} category`})
  } catch (err) { 
    res.status(500).json({ message:'ID Not found!'});
}
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryLists = await Category.destroy({ 
      where: {
        id: req.params.id,
      },
    });
    
    if (!categoryLists) {
      res.status(404).json({ message:'ID Not found!'});
      return;
    } 

    res.status(200).json(categoryLists)
  } catch (err) { 
    res.status(500).json(err);
}

});

module.exports = router;
