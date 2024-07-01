const slugify = (name) => {
    return name.toLowerCase().split(" ").join("-")
}

const reSlugify = (path) => {
    return path.split("-").join(" ")
}