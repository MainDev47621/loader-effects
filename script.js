const source = document.getElementById('loader-options');
const template = Handlebars.compile(source);
const context = {
    loaders: []
};
const compiledHtml = template(context);