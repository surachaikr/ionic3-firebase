import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public promise() {
    this.navCtrl.push('PromisePage');
  }

  public observable() {
    this.navCtrl.push('ObservablePage');
  }

  public exportImport() {
    this.navCtrl.push('ExportImportPage');
  }

  public exportImportMixin() {
    this.navCtrl.push('ExportImportMixinPage');
  }

  public ngif() {
    this.navCtrl.push('NgifPage');
  }

  public ngSwitch() {
    this.navCtrl.push('NgSwitchPage');
  }

  public ngfor() {
    this.navCtrl.push('NgforPage');
  }

  public structure() {
    this.navCtrl.push('StructurePage');
  }

  public injection() {
    this.navCtrl.push('InjectionPage');
  }

  public navigationPushPop() {
    this.navCtrl.push('NavigationPushpopPage');
  }

  public navigationModal() {
    this.navCtrl.push('NavigationModalPage');
  }

  public navigationPopover() {
    this.navCtrl.push('NavigationPopoverPage');
  }

  public tabs() {
    this.navCtrl.push('TabsPage');
  }

  public dataBinding() {
    this.navCtrl.push('DataBindingPage');
  }

  public formBuilder() {
    this.navCtrl.push('FormBuilderPage');
  }

  public formBuilderValidation() {
    this.navCtrl.push('FormBuilderValidationPage');
  }

  public gridResponsive() {
    this.navCtrl.push('GridResponsivePage');
  }

  public theme() {
    this.navCtrl.push('ThemePage');
  }

  public icon() {
    this.navCtrl.push('IconPage');
  }

  public fontAwesome() {
    this.navCtrl.push('FontAwesomePage');
  }

  public googleFont() {
    this.navCtrl.push('GoogleFontPage');
  }

  public menuInPage() {
    this.navCtrl.push('MenuInPage');
  }

  public loadActionToastAlert() {
    this.navCtrl.push('LoadActionToastAlertPage');
  }

  public viewController() {
    this.navCtrl.push('ViewControllerPage');
  }

  public component() {
    this.navCtrl.push('ComponentPage');
  }

  public storage() {
    this.navCtrl.push('StoragePage');
  }

  public dataManipulation() {
    this.navCtrl.push('DataManipulationPage');
  }

  public http() {
    this.navCtrl.push('HttpPage');
  }

  public dataSubmitToServer() {
    this.navCtrl.push('DataSubmitToServerPage');
  }

  public dataSubmitWithProvider() {
    this.navCtrl.push('DataSubmitWithProviderPage');
  }

  public translation() {
    this.navCtrl.push('TranslationPage');
  }

  public sharedModule() {
    this.navCtrl.push('UseSharedModulePage');
  }

  public extends() {
    this.navCtrl.push('UseExtendsPage');
  }

  public deeplinks() {
    this.navCtrl.push('deeplinks-demo', {
      id: '1234'
    });
  }

  public firebaseCloudFunction() {
    this.navCtrl.push('FirebaseCloudFunctionPage');
  }

  public firebaseCloudMessage() {
    this.navCtrl.push('FirebaseCloudMessagePage');
  }

  public firebaseCrashReport() {
    this.navCtrl.push('FirebaseCrashReportPage');
  }

  public barcodeScanner() {
    this.navCtrl.push('BarcodeScannerPage');
  }

  public camera() {
    this.navCtrl.push('CameraExamplePage');
  }

  public algoliaSearch() {
    this.navCtrl.push('AlgoliaDemoPage');
  }

  public googleMaps() {
    this.navCtrl.push('GoogleMapsPage');
  }

  public firebaseAuthen() {
    this.navCtrl.push('FirebaseAuthenPage');
  }

  public firebaseDatabase() {
    this.navCtrl.push('FirebaseDatabasePage');
  }

  public firebaseStorage() {
    this.navCtrl.push('FirebaseStoragePage');
  }

  public chart() {
    this.navCtrl.push('ChartPage');
  }

  public uploadFilePage() {
    this.navCtrl.push('UploadFilePage');
  }

  public uploadImagePage() {
    this.navCtrl.push('UploadImagePage');
  }
  
}
