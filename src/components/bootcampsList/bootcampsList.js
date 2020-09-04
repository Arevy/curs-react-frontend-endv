import React, { Component } from 'react'
import BootcampComponent from '../bootcamp/bootcamp';
import SearchBarCompoent from '../searchBar/searchBar';
import './bootcampsList.css';

class BootcampListComponent extends Component {
    constructor() {
        super();

        this.state = {
            searchField: '',
            bootcamps: [
            {   id: 1,
                name: "Frontend Bootcamp",
                description: "Frontend Bootcamp",
                date: new Date("2020-02-02")
            },
            {
                id: 2,
                name: "Backend Bootcamp",
                description: "Backend Bootcamp",
                date: new Date("2020-02-20")
            },
            {
                id: 3,
                name: "ML Bootcamp",
                description: "ML Bootcamp",
                date: new Date("2020-02-22")
            }
            ]
        }
    }
    deleteBootcamp = (id) => {
        this.setState((state) => ({
          bootcamps: state.bootcamps.filter(
            (each) => each.id !== id
          ),
        }));
      };
    render() {
        const {bootcamps, searchField} = this.state;
        const filteredBootcamps = bootcamps.filter(bootcamp => bootcamp.name.toLowerCase().includes(searchField.toLocaleLowerCase())).sort((a, b) => b.date - a.date);
        return (
            <div className="container">
                <SearchBarCompoent placeholder="Search bootcamps" handleChange={e => this.setState({searchField: e.target.value})}></SearchBarCompoent>
                <div className="card-list">
                {filteredBootcamps.map(bootcamp => <BootcampComponent key={bootcamp.id} bootcamp={bootcamp} DeleteBootcamp={this.deleteBootcamp}></BootcampComponent>)}
            </div>
            </div>
        
        )
    }
}

export default BootcampListComponent;
