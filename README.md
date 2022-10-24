This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

## Getting Started

These are the steps you should follow when creating a bug report:

- Bug reports must be verified against the `next@canary` release. The canary version of Next.js ships daily and includes all features and fixes that have not been released to the stable version yet. Think of canary as a public beta. Some issues may already be fixed in the canary version, so please verify that your issue reproduces before opening a new issue. Issues not verified against `next@canary` will be closed after 30 days.
- Make sure your issue is not a duplicate. Use the [GitHub issue search](https://github.com/vercel/next.js/issues) to see if there is already an open issue that matches yours. If that is the case, upvoting the other issue's first comment is desireable as we often prioritize issues based on the number of votes they receive. Note: Adding a "+1" or "same issue" comment without adding more context about the issue should be avoided. If you only find closed related issues, you can link to them using the issue number and `#`, eg.: `I found this related issue: #3000`.
- If you think the issue is not in Next.js, the best place to ask for help is our [Discord community](https://nextjs.org/discord) or [GitHub discussions](https://github.com/vercel/next.js/discussions). Our community is welcoming and can often answer a project-related question faster than the Next.js core team.
- Make the reproduction as minimal as possible. Try to exclude any code that does not help reproducing the issue. E.g. if you experience problems with Routing, including ESLint configurations or API routes aren't necessary. The less lines of code is to read through, the easier it is for the Next.js team to investigate. It may also help catching bugs in your codebase before publishing an issue.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to Contribute to Open Source (Next.js)](https://www.youtube.com/watch?v=cuoNzXFLitc) - a video tutorial by Lee Robinson
- [Triaging in the Next.js repository](https://github.com/vercel/next.js/blob/canary/contributing.md#triaging) - how we work on issues
- [StackBlitz](https://stackblitz.com/fork/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on StackBlitz
- [CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/reproduction-template) - Edit this repository on CodeSandbox

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

If your reproduction needs to be deployed, the easiest way is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Reproduction

Clone repo and install

```
pnpm install
```

## Run Tests

```
pnpm jest-babel-all
pnpm jest-babel-one
pnpm jest-next-all
pnpm jest-next-one
```

### jest-babel-all

```
PS C:\Code\testing\repro> pnpm jest-babel-all

> @ jest-babel-all C:\Code\testing\repro
> jest --no-cache --config ./jest.config.babel.js

 PASS  lib/formatDate.test.ts
  ● Console

    console.log
      Timezone Offset: 0

      at Object.log (lib/formatDate.test.ts:8:15)

 PASS  lib/randomFile.test.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.529 s
Ran all test suites.
```

### jest-babel-one

```
PS C:\Code\testing\repro> pnpm jest-babel-one

> @ jest-babel-one C:\Code\testing\repro
> jest --no-cache --config ./jest.config.babel.js lib/formatDate.test.ts

  console.log
    Timezone Offset: 0

      at Object.log (lib/formatDate.test.ts:8:13)

 PASS  lib/formatDate.test.ts
  ISO Date
    √ returns correct hour value (32 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.605 s
Ran all test suites matching /lib\\formatDate.test.ts/i.
```

### jest-next-all

```
PS C:\Code\testing\repro> pnpm jest-next-all

> @ jest-next-all C:\Code\testing\repro
> jest --no-cache --config ./jest.config.next.js

 PASS  lib/formatDate.test.ts
  ● Console

    console.log
      Timezone Offset: 0

      at Object.log (lib/formatDate.test.ts:8:15)

 PASS  lib/randomFile.test.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.006 s
Ran all test suites.
```

### jest-next-one

```
PS C:\Code\testing\repro> pnpm jest-next-one

> @ jest-next-one C:\Code\testing\repro
> jest --no-cache --config ./jest.config.next.js lib/formatDate.test.ts

  console.log
    Timezone Offset: -600

      at Object.log (lib/formatDate.test.ts:8:13)

 FAIL  lib/formatDate.test.ts
  ISO Date
    × returns correct hour value (21 ms)

  ● ISO Date › returns correct hour value

    expect(received).toBe(expected) // Object.is equality

    Expected: 13
    Received: 23

       8 |     console.log(`Timezone Offset: ${new Date().getTimezoneOffset()}`);
       9 |
    > 10 |     expect(new Date(date).getHours()).toBe(13);
         |                                       ^
      11 |   });
      12 | });
      13 |

      at Object.toBe (lib/formatDate.test.ts:10:39)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.433 s
Ran all test suites matching /lib\\formatDate.test.ts/i.
 ELIFECYCLE  Command failed with exit code 1.
```


