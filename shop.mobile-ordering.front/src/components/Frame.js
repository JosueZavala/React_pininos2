import React from 'react';
import ReactDOM from 'react-dom';
import LocaleCard from '../components/LocaleCard';
import SearchInput from '../components/SearchInput'

class Frame extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      countries: [
        {
          name:'SWITZERLAND',
          locale:'FR-SW',
          isLoyalty: true,
        },{
          name:'SWITZERLAND',
          locale:'AL-SW',
          isLoyalty: true,
        },{
          name:'India',
          locale:'EN-IN',
          isLoyalty: false,
        },{
          name:'Brazil',
          locale:'PT-br',
          isLoyalty: false,
        },{
          name:'Brazil',
          locale:'PT-br',
          isLoyalty: false,
        }
      ]
    }
  }

  RenderLocaleCards = () => {
    const itemsArray = [];
    const countriesJson = this.state.countries;
    //console.log(countriesJson);
    countriesJson.forEach((data, index) => {
      //console.log(data);
      itemsArray.push(
        <div className="col-6">
          <LocaleCard country={data.name} locale={data.locale} key={"locale"+index}/>
        </div>
        );
    });
    return itemsArray;
  }

  render() {
    const arrayCards = this.RenderLocaleCards();

    return (
      <div className="container-fluid">
        <div className="page-header">
        </div>
        <div className="row">
          <div className="title-Module">
            Generate catalog
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
                <SearchInput />
             </div>
          </div>

          <div className="row card-Locales-container">
                {arrayCards}
          </div>
      </div>


      </div>
    );
  }
}

export default Frame
