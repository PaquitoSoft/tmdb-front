## Characteristics
* Bundle size: [5.1kb](https://bundlephobia.com/result?p=fetchql@3.0.0)

* Usage: Create the main Query object and operate using its **query** method.
* Bundle size: [5.1kb](https://bundlephobia.com/result?p=fetchql@3.0.0)
* Documentation: Very basic. I had to dig into code to figure out some things (named queries and dealing with error extensions)
* Cache: No
* Testing

## Notes
* When the server returns an error, the client expose an array (even if there's only one) where every item is an object with a **message** and **stack** attributes. The **stack** is actually the _raw_ **Response** object you have to parse if you need the **extensions** information of the error.
