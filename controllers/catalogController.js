const { getProducts, createProduct, deleteProduct } = require('../src/data')

const indexAction = async (req, res) => {
    const products = await getProducts();
    res.locals = {
        title: 'Catalog Page',
        products
    };
    res.render('catalog');
};

const createAction = async (req, res) => {
    res.render('create');
};

const saveAction = async (req, res) => {
    req.body.promoted ? req.body.promoted = true : req.body.promoted = false

    await createProduct(req.body);
    res.redirect('/catalog');
};

const deleteAction = async (req, res) => {
    await deleteProduct(req.params.id)
    res.redirect('/catalog');
};


module.exports = {
    indexAction,
    createAction,
    saveAction,
    deleteAction
}