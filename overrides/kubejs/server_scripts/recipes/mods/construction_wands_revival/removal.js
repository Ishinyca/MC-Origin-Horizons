// const cwrOutputsToRemove = [
//     'constructionwand:void_sack',
//     'constructionwand:core_angel',
//     'constructionwand:core_destrution',
// ];

ServerEvents.recipes(event => {
    event.remove({ mod: 'constructionwand' })
});
