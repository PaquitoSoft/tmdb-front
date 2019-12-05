## Characteristics
* Bundle size: [5.1kb](https://bundlephobia.com/result?p=fetchql@3.0.0)

## Advantages

## Cons
* When the server returns an error, the client expose an array (even if there's only one) where every item is an object with a **message** and **stack** attributes. The **stack** is actually the _raw_ **Response** object you have to parse if you need the **extensions** information of the error.

## Problems
* The operationName is required. It seems to enforce some server schema naming.
** It seems it is not actually required
