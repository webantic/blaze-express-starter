module.exports = {
    render(template){
        if (!template || !Template[template]) return
        return Blaze.render(Template[template], document.getElementById("blaze__root"))
    }
}