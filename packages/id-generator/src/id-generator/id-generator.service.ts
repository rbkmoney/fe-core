import { Injectable } from '@angular/core';
import * as short from 'short-uuid';

@Injectable()
export class IdGeneratorService {
    generateUUID(): string {
        return short().uuid();
    }

    generateShortUUID(): string {
        return short().generate();
    }
}
