# How to use Redakt API?

## Encrypt a text

Use the following URL: `https://redakt.org/api?encrypt=[TEXT TO ENCRYPT]`

Example: 
- Input: `https://redakt.org/api?encrypt=test` 
- Output: `redakt-U2FsdGVkX19LHou7owsWOwu33R7KrRI7YL/B/UuqOOU=&&&`

## Decrypt a text

Use the following URL: `https://redakt.org/api?decrypt=[TEXT TO DECRYPT]`

Example: 
- Input: `https://redakt.org/api?decrypt=redakt-U2FsdGVkX19LHou7owsWOwu33R7KrRI7YL/B/UuqOOU=&&&` 
-  Output: `test`
