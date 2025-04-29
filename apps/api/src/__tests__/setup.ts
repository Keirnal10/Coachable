import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables from .env.test
dotenv.config({ path: '.env.test' });

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const originalModule = jest.requireActual('@prisma/client');
  return {
    ...originalModule,
    PrismaClient: jest.fn().mockImplementation(() => ({
      $connect: jest.fn(),
      $disconnect: jest.fn(),
      user: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      video: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      feedback: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    })),
  };
});

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

// Add a test to make the file valid
test('setup file is loaded', () => {
  expect(true).toBe(true);
}); 