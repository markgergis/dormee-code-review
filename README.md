# Project X Application

## Setup
1. Clone this repo to your desktop `git@gitlab.com:dormee/dormee-mobile-app.git`
2. Run `npm install` to install npm modules.
3. Run `git fetch`
3. Run `git checkout dev`
4. Run `git pull origin dev`
5. Make sure that your application is working on expo.
6. Make sure that eslint is working you don't need any special setup.
7. Also you can include this in your editor settings file `"eslint.autoFixOnSave": true` for eslint to fix autmotically most of the eslint errors. you can still work without it.

## Code Quality Roles
1. Set your indent to two spaces not tabs !!
2. Check the react official style guide from [here](https://github.com/airbnb/javascript/tree/master/react).
2. Files names and functions names are in the `camelCase`.
3. Components Names are in the `PascalCase`.
4. Constants should be written like that `const USER_LOGIN = balabizo;`
5. Please use async await for handling promises.
6. Commenting your code is a must !!
7. Functions, Files and Components names should be descriptive.
8. Please include every screen, action, reducer you make in the index.js file in the respective folder.
9. Please don't modify main.js & app.js file.

## Workflow

### Before starting 
1. run `git checkout dev` then `git pull origin dev` to install latest updates in the repo.
2. Run `npm install` to install new npm modules.
3. create a new branch and checkout this branch using this command `git checkout -b your-branch-name`.
4. Branch naming convention should be descriptive for the feature no uppercase characters and words seperated by `-` not `_`
5. Check branch is created successfully by running this command `git branch` you should see all the branches you have locally. you can verify this branch by seeing its name and a star beside it. 
6. Go to [boards](https://gitlab.com/dormee/dormee-mobile/boards) and move the issue you are working on from To Do List to Doing List.
7. Check the wireframe of this feature attached in the issue assigned to you.

#### All the screens are set now please find your screen(s) and use them. 
#### Every screen has its corresponding components folder in the components directory this folder is for the components only and the view should be placed in the component folder directly 
#### For testing please comment the lines wrapped inside the App.js and test your component/screen
```
// please comment these lines for testing

    // this is for loading static assets while the app is loading
    if (!this.state.appLoaded) {
      return <AppLoading />;
    }

    return (
      <NavigationProvider router={Router}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute('main')} />
        </NavigationProvider>
      </NavigationProvider>
    );
      // ...
```
#### For setting navigation please read [this](https://github.com/expo/ex-navigation)

### For Commits
1. Please follow the Style guide in commiting your code. you find it [here](https://drive.google.com/file/d/0B2VFqW0FcrSdZmRnR3MzODJucHc/view?usp=sharing)
2. Make sure the commit is descriptive to what you did.
3. Commit after every important checkpoint. Commits after every subfeature/component. Also a commit for every fix.
4. Reusable components for others tasks must be done at the beginning and create a MR for the component.

## For Pull Requests

#### Before the pull request
1. Make sure that your feature is working on both platforms (Android and iOS).
2. Make sure the design matches the wireframe.
3. Please do include the data you test the feature with in the actions file.
4. We expect from you a screen, component, action and reducer related to the feature implemented. 
5. Remove any debugging lines.

#### Pull request details.

1. Make sure the base branch is `dev`.
2. Make sure you are starting the description of the PR with a bold title. `Hint: put ## before the title`.
3. Make sure to include the features you made in this PR by bullet points. `Hint: put - before every feature`.
4. Make sure to reference the issue related to this PR.
5. Assign a reviewer for the task.
6. Add the appropriate labels (needs-review) to the MR.

## Boards flow
We have 7 boards
- **To Do** : issues in the backlog no progress yet.
- **Doing** : issues you create a branch and started working on it. Move the issue from **To Do** to here when you start working on the task.
- **needs-review** : Move the issue from **To Do** to here when you create a MR after you finish the task.
- **in-review** : the reviewer will move the issue to here when he start reviewing the MR.
- **needs-fixing** : the reviewer will move the issue to here when changes are requested on the MR. after the issue is moved to here you can start fixing and work on it again. After you are done move it to **needs-review** again.
- **ready-to-merge** : the cycle of the last 3 boards will continue till everything goes fine. when the reviewer move the issue here, your task is done with this feature/task.
- **closed**: the issue is moved here when it's merged by the reviewer or the team leader.


## Packages
### When Installing npm modules,  please check the following
1. Check with the team leader why this package is important.
2. Check the documentation and the code written. In many cases it's a simple trick. so you can rewrite it without installing the dependency.
3. Check the latest updates of the package. Newer packages are better !!

### Packages installed
1. react-navigation.
2. react-native-elements.
3. lodash.
4. axios.
5. react-redux.
6. redux.
7. redux-thunk.
8. eslint-config-rallycoding.
9. airbnb maps.
