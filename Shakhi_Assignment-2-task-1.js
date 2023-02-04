function validation(str)

{
regexp = /<([!]?[A-Za-z]+) *[^/]*?>/;

let exp=regexp.test(str)?true:false

console.log(exp)

}

validation('<!DOCTYPE html>')

validation('<meta name="viewport" content="width=device-width, initial-scale=1.0">')

validation('<html</html>>');