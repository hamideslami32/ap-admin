// normalize path and remove "/" from last of path

export const normalizePath = (path) => {
    const regex = /\/$/gm
    const subst = ''
        
    const result = path.replace(regex, subst)
        
    return result
}
export const normalizeSearchField = (object) => {
    let fieldData = {
        label: object.label.toLowerCase().replace(' ', '-'), 
        value: object.value.toLowerCase()
    }
        
    return fieldData
}