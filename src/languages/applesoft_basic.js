/*
   Language: Applesoft BASIC
   Author: Anthony M. Cook <github@anthonymcook.com>
   Category: misc
   */

function(hljs) {
  var KEYWORDS = {
    keyword: 'input print gosub read for dim stop next return gr home len if',
    built_in: 'run load brun bload'
  }

  return {
    aliases: ['basic'],
    case_insensitive: true,
    lexemes: /\S+/,
    keywords: KEYWORDS,
    contains: [
      {
        className: 'string',
        begin: /"/, end: /"|\n/,
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        className: 'variable',
        begin: /\w+\$/
      },
      {
        className: 'comment',
        begin: 'REM', end: '\n'
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE
      }
    ]
  }
}

