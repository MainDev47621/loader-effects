const source = document.getElementById('loader-options').innerHTML;
const template = Handlebars.compile(source);
const loaderNames = ['circles-wave', 'dot-circle', 'dots-hue-rotate', 'glass-circle', 'gradient-spin', 'nested-circles', 'text-fill'];
const loaderObjects = loaderNames.map(loader => (
    {
        name: loader,
        url: `./loaders-html/${loader}.html`
    }
));
console.log(loaderObjects);
const context = {
    loaders: loaderObjects
};
const compiledHtml = template(context);
const optionsDisp = document.getElementById('options');
optionsDisp.innerHTML = compiledHtml;