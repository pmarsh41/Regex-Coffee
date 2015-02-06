var text = "plunger pot caffeine froth caramelization barista, crema eu to go crema redeye medium grounds, rich, espresso, pumpkin spice, to go shop fair trade steamed frappuccino. Espresso is delicioso. as coffee, beans café au lait to go beans, single shot organic strong affogato a to go siphon foam viennese so half and half aroma con panna viennese. Thirsty? Aromatic, white coffee siphon single origin turkish breve. frappuccino dark latte, decaffeinated cappuccino foam cortado espresso. Affogato. Mm."

// Part 1: replace any occurrence of "espresso" (upper or lowercase) with "ESPRESSO YUM YUM YUM".

 text = text.replace(/espresso/ig, "ESPRESSO YUM YUM YUM")

 console.assert(text.match(/espresso yum yum yum/ig) !== null)
  console.log(text)

//Part 2: Make any question (?) an exclamation (!).

 text = text.replace(/\?/g, "!")

 console.assert(text.indexOf('?') === -1)
 console.log(text)

// Part 3: replace any occurrence of "café au lait" (upper or lowercase) with "café-au-lait?".

 text = text.replace(/café au lait/ig, "café-au-lait")

console.assert(text.match(/café au lait/ig) === null)
console.log(text)

// Part 4: replace any occurrence of two same letters ("aa", "mm", etc) with four of the same letters ("aaaa", "mmmm", etc).

text = text.replace(/(\w)\1+/ig, "$1$1$1$1")


// testing for any occurrences of 2 letters, but no more:

var myRe = /(\w)\1+/ig;
var matches = [], t;
while ((t = myRe.exec(text)) !== null) {
    matches = matches.concat(t)
}
matches = matches.filter(function(v){
    return v.length === 2
})
 console.assert(matches.length === 0)
console.log(text)

