import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '@ui/adapter/input/app/components/core/header/header.component';
import { MainComponent } from "@ui/adapter/input/app/components/core/main/main.component";
import { GameCollectionUseCase } from '@ui/domain/usecase/GameCollectionUseCase';
import { GameCollectionEntity } from '@shared/domain/entity/GameCollectionEntity';

@Component({
	selector: '[app-root]',
	imports: [RouterOutlet, HeaderComponent, MainComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

	title = 'game-drawer';

	private readonly gameCollectionUseCase: GameCollectionUseCase;
	private gameCollections: Array<GameCollectionEntity>;

	constructor(gameCollectionUseCase: GameCollectionUseCase) {
		this.gameCollectionUseCase = gameCollectionUseCase;
	}

	ngOnInit(): void {

		this.gameCollections = this.gameCollectionUseCase.getAllGameCollections();
		console.log(this.gameCollections);
	}
}
