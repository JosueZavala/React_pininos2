import React from 'react';
import ReactDOM from 'react-dom';
import LocaleCard from '../components/LocaleCard';
import SearchInput from '../components/SearchInput'

class CatalogGenerator extends React.Component{
  constructor(props){
    super(props);
    this.RenderLocaleCards = this.RenderLocaleCards.bind(this);

    this.state = {
      countries: [
        {
          Country:'SWITZERLAND',
          Code:'FR-SW',
          isShop: true,
        },{
          Country:'SWITZERLAND',
          Code:'AL-SW',
          isShop: true,
        },{
          Country:'India',
          Code:'EN-IN',
          isShop: false,
        },{
          Country:'Brazil',
          Code:'PT-br',
          isShop: false,
        },{
          Country:'Brazil',
          Code:'PT-br',
          isShop: false,
        }
      ]
    }
  }

  RenderLocaleCards(searchValue) {
    const itemsArray = [];
    const countriesJson = this.state.countries;
    const searchValueUpperCase = searchValue.toUpperCase();
    //console.log(countriesJson);
    countriesJson.forEach((data, index) => {
      let dataUpperCase = data.Country.toUpperCase();
      let codeUpperCase = data.Code.toUpperCase();

        if ( dataUpperCase.includes(searchValueUpperCase) ||  codeUpperCase.includes(searchValueUpperCase) ){
          // debugger;
          itemsArray.push(
              <div className="col-6">
                <LocaleCard country={data.Country} locale={data.Code} key={"locale"+index}/>
              </div>
              );
            }
          });
    return itemsArray;
  }

  render() {


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="title-Module">
            Catalog Generator
          </div>
        </div>

        <div className="container">
           <div className="row">
             <div className="col-sm">
               Locales
             </div>
          </div>

           <div className="row">
             <div className="col-sm dropDown-container">
                <SearchInput
                  FunctionOnChange =  {this.RenderLocaleCards}
                />
             </div>
          </div>


      </div>


      </div>
    );
  }
}

export default CatalogGenerator
