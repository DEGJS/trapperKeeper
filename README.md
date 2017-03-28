# trapperKeeper
trapperKeeper is a module for storing a basic web application's state. It uses the recently added JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object to create and store iterable key/value maps.

This plugin is based on the idea of keeping an application's state in a single state container that can be accessed across components, somewhat similar to the thinking in plugins such as [Redux](http://redux.js.org/) (although tK is much, much more simplistic in codebase and intent).

## Install
trapperKeeper is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install trapperKeeper with the following command:

```
$ jspm install github:DEGJS/trapperKeeper
```
## Usage
trapperKeeper is a singleton, so it does not need to be instantiated and can be called from multiple ES6 modules.

```js
import trapperKeeper from "DEGJS/trapperKeeper";

/* Save a key/value pair to a Map store, which will be automatically created if one does not exist. */
trapperKeeper.set('userData', {
    firstName: 'Brandon',
    lastName: 'Walsh'
});
trapperKeeper.set('locationData', {
    city: 'Beverly Hills',
    state: 'CA',
    zipCode: '90210'
});

/* Get the full Map collection, which contains all individual Map stores */
let allStores = trapperKeeper.get(); // returns a Map collection containing both the userData and locationData Map stores
console.log(allStores.size); // 2

/* Get a specific Map store, with full access to the Map's properties and methods */
let userDataStore = trapperKeeper.get('userData');
console.log(userDataStore.size) // 2
console.log(userDataStore.get('firstName')) // "Brandon"

/* Get a specific Map store value */
console.log(trapperKeeper.get('locationData', 'zipCode')); // "90210"

```


## Methods

### .set(key, valsObj)  
Saves the valsObj object to the Map store referenced by the key. If the store doesn't exist, one will be created automatically.

### .get(key, value)
Returns either the full Map collection, an individual Map store based on key, or an individual Map store value based on value.

#### key
Type: `String`    
The optional name of the individual Map store to be returned. If omitted, the root Map collection containing all Map stores will be returned.

#### value
Type: `String`   
The optional name of the Map store value to be returned. If omitted, returns either the root Map collection or an individual Map store, depending on `key` setting.


## Browser Support
trapperKeeper depends on the following browser APIs:
+ [Object Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

To support legacy browsers, you'll need to include polyfills for the above APIs. 
