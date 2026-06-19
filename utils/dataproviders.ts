import * as fs from 'fs';
export class DataProviders 
{
  static getLoginDatafromJson(filePath: string) 
  {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  /*static getLoginDatafromCSV(filePath: string) {
    const data = fs.readFileSync(filePath, 'utf-8').trim();
    const [header, ...rows] = data.split(/\r?\n/);
    const columns = header.split(',').map((col) => col.trim());
    return rows.map((row) => {
      const values = row.split(',').map((value) => value.trim());
      return columns.reduce((result: Record<string, string>, column, index) => {
        result[column] = values[index] ?? '';
        return result;
      }, {} as Record<string, string>);
    });
  }*/
}