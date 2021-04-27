import { IdGeneratorService } from './id-generator.service';

describe('IdGeneratorService', () => {
    let service: IdGeneratorService;

    beforeEach(() => {
        service = new IdGeneratorService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('generateUUID', () => {
        it('should generate uuid', () => {
            expect(service.uuid()).toBeTruthy();
        });

        it('new generated uuid should be not like it was before', () => {
            expect(service.uuid()).not.toBe(service.uuid());
        });
    });

    describe('generateShortUUID', () => {
        it('should generate short uuid', () => {
             expect(service.shortUuid()).toBeTruthy();
        });

        it('new generated short uuid should be not like it was before', () => {
            expect(service.shortUuid()).not.toBe(service.shortUuid());
        });
    });
});
