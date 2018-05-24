export class Applicazione {
  public codice:                  string;
  public nome:                    string;
  public custom_o_pckg:           string;
  public pckg_verticalizzazioni:  boolean;
  public obsoleta:                boolean;

  constructor(applicazione: any = null) {
    this.codice                 = applicazione ? applicazione.codice : '';
    this.nome                   = applicazione ? applicazione.nome : '';
    this.custom_o_pckg          = applicazione ? applicazione.custom_o_pckg : 'C';
    this.pckg_verticalizzazioni = applicazione ? applicazione.pckg_verticalizzazioni : false;
    this.obsoleta               = applicazione ? applicazione.obsoleta : false;
  }
}