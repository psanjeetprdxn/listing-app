import React, { Component } from "react";
import { connect } from "react-redux";
import loader from "../../assets/images/loader.svg";
import ReactPaginate from "react-paginate";
import { fetchCharactersData, changeActivePage } from "../../redux";
import female from "../../assets/images/female.png";
import male from "../../assets/images/male.png";
import "./characters.css";

export class Characters extends Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    if (this.props.charactersData.data.length < 1) {
      this.props.fetchCharactersData(this.props.charactersData.activePage);
    }
  }

  handlePageClick(data) {
    this.props.fetchCharactersData(data.selected + 1);
    this.props.changeActivePage(data.selected + 1);
  }

  render() {
    let characters;
    if (
      this.props.charactersData.loading === false ||
      this.props.charactersData.loading != null ||
      this.props.charactersData.error === null
    ) {
      characters = this.props.charactersData.data.map((item, index) => {
        if (item.name) {
          return (
            <dl key={index} className="character">
              <dt className="character-name">{item.name}</dt>
              <dd>
                <span className="bold">Gender: </span>
                {item.gender === "Male" ? (
                  <img src={male} alt="Male" className="character-gender" />
                ) : (
                  <img src={female} alt="Female" className="character-gender" />
                )}
              </dd>
              <dd>
                <span className="bold">Culture: </span>
                {item.culture ? item.culture : "-"}
              </dd>
              <dd>
                <span className="bold">Also known as: </span>
                {item.aliases[0] !== "" ? item.aliases.join(", ") : "-"}
              </dd>
              <dd>
                <span className="bold">Played By: </span>
                {item.playedBy[0] !== "" ? item.playedBy.join(", ") : "-"}
              </dd>
            </dl>
          );
        }
      });
    }

    return (
      <div className="characters-listing">
        <div className="wrapper">
          {this.props.charactersData.loading ||
          this.props.charactersData.loading == null ? (
            <figure>
              <img src={loader} alt="Loader" className="loader"></img>
            </figure>
          ) : (
            <div className="characters">{characters}</div>
          )}
          {this.props.charactersData.data.length !== 0  ? (
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.props.charactersData.totalItemsCount}
              marginPagesDisplayed={5}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              forcePage={this.props.charactersData.activePage - 1}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  charactersData: state.charactersData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharactersData: (page) => dispatch(fetchCharactersData(page)),
    changeActivePage: (page) => dispatch(changeActivePage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
