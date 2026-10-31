import { parse } from 'Csv-parse/sync';
import * as fs from 'fs';

export class Csvhelp {
    static readCsv(filepath: string): Record<string, string>[] {
        const filecontent = fs.readFileSync(filepath, `utf-8`);

        return parse(filecontent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
        }) as Record<string, string>[];
    }
}