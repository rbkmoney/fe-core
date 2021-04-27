import { Injectable } from '@angular/core';
import * as short from 'short-uuid';

@Injectable()
export class IdGeneratorService {
    uuid(): string {
        return short().uuid();
    }

    shortUuid(): string {
        return short().generate();
    }
}
