# Light-it challenge

## Techonologies

- `React`
- `Next.js`
- `TypeScript`
- `Tailwind`
- `Axios` & `React Query` for data fetching
- `React Query devtools` for debugging
- `Jest`
- `React Testing Library`
- `React Hook Form`
- `Dayjs` to handle dates
- `React-virtual` to handle large lists (instead of pagination)

## Requirements

Project was developed using node `20.9.0` LTS, so it's recommended to use the same version. If you have `nvm` installed, you can run:

`nvm use`

However, it should work just fine with previous versions like `18.18.0` LTS.

### Install node dependencies

`npm install`

### Run the project

`npm run build && npm run start`

It will run on port `3000` by default.

Head to <http://localhost:3000/>

## Description of some decisions made

I'm using `React Query` for data fetching. And invalidating the cache after the create, edit and delete actions.

I'm **prefetching** data with `Server Components`. And displaying a **skeleton** during the loading time that's being rendered on first page paint (server side).

As data results is not paginated, I'm using `react-virtual` to handle large lists in memory instead of rendering all the data to the DOM at once (which usually makes the page clunky).

Though it's a very simple project, I've separate **DTO entities** from **domain entities**. And mapping from one to other right after data fetching. Usually I add methods to domain entities, but the project is too small to showcase that.

I wrote a lot of **composable components**, so you can see a few **composition patterns**.

I'm using `React Hook Form` for form handling. I've found it much simpler than `Formik` and `Yup`/`Zod` combination, as it comes with it's own validation mechanism.

For dates, I'm using `Dayjs` instead of native `Date` object. It's much simpler to handle dates with it, and it's a very lightweigth library.

I explicitely installed `ESLint` as a dependency, though **Next.js** already includes it. So I've been coding with it and `Typescript` to highlight errors and warnings. Regarding `Prettier`, I have it running as a plugin in my **IDE**. I could just install it as a dependency but I didn't.
