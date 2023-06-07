import { consola } from 'consola';
import { logger } from './logger';

jest.mock('consola', () => ({
	consola: {
		log: jest.fn()
	}
}));

describe('logger', () => {
	test('Uses consola', () => {
		logger.log('test');

		expect(consola.log).toHaveBeenCalledTimes(1);
	});
});
