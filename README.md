## Jest Open Handle Detection Issue

When running

```shell 
yarn test-no-promise
```

then the user is notified of an open handle with a message like: 

```
Jest has detected the following 1 open handle potentially keeping Jest from exiting:

●  Timeout

      1 | test('test', async () => {
    > 2 |     setTimeout(() => console.log('should be logged'), 10000);
        |     ^
      3 | });
      4 |

      at Object.<anonymous> (test-no-promise.spec.js:2:5)
```


When running

```shell 
yarn test-promise
```

Then jest just hangs and user is not notified of the running timer.

