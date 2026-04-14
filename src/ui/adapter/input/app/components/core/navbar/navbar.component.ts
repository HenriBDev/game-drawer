import { Component, OnInit, OnDestroy } from '@angular/core';

import { CarouselComponent } from '@ui/adapter/input/app/components/shared/carousel/carousel.component';
import { FloatingActionButtonComponent } from '@ui/adapter/input/app/components/shared/floating-action-button/floating-action-button.component';
import { GameCollectionModel } from '@ui/domain/model/GameCollectionModel';
import { GameCollectionsStore } from '@ui/domain/store/GameCollectionsStore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: '[app-navbar]',
  imports: [CarouselComponent, FloatingActionButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {

  private readonly gameCollectionsStore: GameCollectionsStore;
  private readonly gameCollections: Observable<Array<GameCollectionModel>>;
  private subscription?: Subscription;

  constructor(gameCollectionsStore: GameCollectionsStore) {
    this.gameCollectionsStore = gameCollectionsStore;
    this.gameCollections = this.gameCollectionsStore.getGameCollections();
  }

  ngOnInit(): void {
    this.subscription = this.gameCollections.subscribe((gameCollections) => {
      console.log(gameCollections);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}