import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
// My custom test to verify login functionality
test('login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  // Navigate to login page and perform login
  await login.goto();
  await login.login('admin', 'admin123');
  // My assertion to verify successful login
  await dashboard.expectLoggedIn();
});
