/**
* Cryptographic functions from Agrippa's Fourth Book of Occult Philosophy
*/

module.exports = {
  // These visual alphabets need to be indexed at 1, so they have a blank string to start.
  charactersOfGoodSpirits: [
    'A simple point',
    'Round point',
    'Starry point',
    'Straight vertical line',
    'Lying line',
    'Oblique line',
    'Line crooked like a bow',
    'Wavey line',
    'Toothed line',
    'Intersection right',
    'Intersection inherent',
    'Intersection adhering separate',
    'Oblique simple intersection',
    'Oblique mixed intersection',
    'Oblique manifold intersection',
    'Perpendicular right dexter',
    'Perpendicular left sinister',
    'Perpendicular neuter',
    'Whole circle',
    'Broken circle',
    'Half circle',
    'Letter inhering',
    'Letter adhering',
    'Letter separate'
  ],

  charactersOfEvilSpirits: [
    'Right line',
    'Crooked line',
    'Reflexed line',
    'Simple circle',
    'Penetrated figure',
    'Broken figure',
    'Right letter',
    'Reversed letter',
    'Inversed letter',
    'Flame',
    'Wind',
    'Water',
    'A mass',
    'Rain',
    'Clay',
    'Flying thing',
    'Creeping thing',
    'Serpent',
    'Eye',
    'Hand',
    'Foot',
    'Crown',
    'Crest',
    'Horns',
    'Scepter',
    'Sword',
    'Scourge'
  ],
  
  // name = name of spirit
  // size = hash table size
  charactersSpiritHash: function (name, size) {
    // p = position in name
    // s = size (length) of name
    // c = numerical value of the letter
    var p = 0,
        s = name.length,
        c = 0,
        result = [],
        lcName = name.toLowerCase();

    // See p 26 in Skinner's edition.
    // @TODO (lcName.charCodeAt(p) - 96) needs to work for any alphabet
    for (p = 0; p < s; p++) {
      result[p] = ((3 * s * (p + 1)) + lcName.charCodeAt(p) - 96) % size;
    }

    return result;
  },
  
  charactersGoodSpirit: function (name) {
    return this.charactersSpiritHash(name, 24);
  },
  
  charactersEvilSpirit: function (name) {
    return this.charactersSpiritHash(name, 27);
  }
};

