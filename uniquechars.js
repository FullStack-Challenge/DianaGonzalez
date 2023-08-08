/*Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"*/

let str = "thequickbrownfoxjumpsoverthelazydog"
let res = ""

const uniquechars = (str) => {
    for (i=0; i< str.length; i++){
        if (res.includes(str[i])===false){
            res = res + str[i]
        }
    }
    return res
}

console.log(uniquechars(str))