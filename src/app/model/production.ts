import { FullUnit } from "./full-unit";

export class Production {
  prodPerSec = new Decimal(1);
  boughtBonus = new Decimal(0);

  constructor(
    public productor: FullUnit,
    public product: FullUnit,
    public rateo = new Decimal(1)
  ) {
    this.reloadProdPerSec();
  }

  reloadProdPerSec(teamBonus = false) {
    this.prodPerSec = new Decimal(this.rateo);
    if (teamBonus && this.productor.buyAction) {
      this.prodPerSec = this.prodPerSec.times(this.productor.bonus.plus(1));
    }
    this.prodPerSec = this.prodPerSec.times(this.productor.efficiency / 100);
  }
}
