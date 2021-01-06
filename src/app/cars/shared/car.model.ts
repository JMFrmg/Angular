export class Car {
	private _isRunning: boolean;

	constructor(public id: number,
				public brand: string,
				public model: string,
				public horsePower: number,
				public weight: number,
				public price: number,
				public nbSeats: number) {
		this._isRunning = false;
	}

	start(): boolean {
		if(this._isRunning) {
			console.log("La voiture a déjà démarré enculé!");
			return false;
		}
		else {
			console.log("Démarrage de la voiture...");
			this._isRunning = true;
			return true;
		}
	}

	stop(): boolean {
		if(!this._isRunning) {
			console.log("La voiture est à l'arrêt enculé!");
			return false;
		}
		else {
			console.log("La voiture s'arrête...");
			this._isRunning = false;
			return true;
		}
	}

	move(d: number): void {
		if (this._isRunning) {
			console.log("La voiture avance de " + d + " mètres.");
		}
		else {
			console.log("La voiture n'a pas démarré putain!");
		}
	}
}