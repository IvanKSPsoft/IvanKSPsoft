# consumer_platform_tests
End to end tests for consumer platform web app

# Run Tests
npx playwright test 

# Run Scpecific File
npx playwright test {path to file}

# Run specific project
npx playwright --care      
npx playwright --dev
npx playwright --localhost

or  

npx playwright test --config playwright.config.ts --project=care
npx playwright test --config playwright.config.ts --project=dev
npx playwright test --config playwright.config.ts --project=localhost

# Scripts for CI 

# run tests on localhost
npm run Develpment
# run tests on Dev env
npm run Staging
# run tests on UAT env
npm run UAT
