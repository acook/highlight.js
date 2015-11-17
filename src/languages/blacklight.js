/*
   Language: blacklight
   Author: Anthony M. Cook <github@anthonymcook.com>
   Category: misc
   */

function(hljs) {
  var KEYWORDS = {
    keyword: 'decap depth drop dup over purge rot swap',
    built_in: 'print'
  }

  return {
    aliases: ['bl'],
    lexemes: /\S+/,
    keywords: KEYWORDS,
    contains: [
      hljs.APOS_STRING_MODE,
      {
        className: 'string',
        begin: /\\/, end: /\s/
      },
      {
        className: 'comment',
        begin: ';;', end: '\n'
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE
      },
      {
        className: 'keyword',
        begin: '\\$new|\\$swap|\\$drop|\\$|@|\\^|nil|true'
      },
      {
        className: 'variable',
        variants: [
        {begin: '~', end: /\s/},
        {begin: ':', end: /\s/},
        {begin: /\S+:/}
        ]
      }

    ]
  }
}
