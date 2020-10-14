import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-10-09 para 09/10/2020', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2020-10-09')).toEqual('09/10/2020');
  });
});
