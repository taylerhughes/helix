import React, { Component } from 'react';
import './App.css';
import imageFiles from './data.js';
import axios from 'axios'
import key from './key.js';
import CardList from './components/CardList.js';
import SearchBox from './components/SearchBox.js';
import { Grid } from 'react-bootstrap';
import Header from './components/Header.js';
import KeywordList from './components/KeywordList.js';

class App extends Component {

      constructor() {
        super();
        this.state = {
          images:[],
          searchfield: '',
          filteredImages:[],
          suggestedKeywords:[]
        }
        this.onKeywordChange = this.onKeywordChange.bind(this);
      }

      getLabels = (image) => {
        const AuthKey = key.key;
        const res = axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${AuthKey}`, {
          requests: [
            {
              image:{
                source:{
                  imageUri: `http://storage.googleapis.com/${image}`
                }
              },
              features:[
                {
                  type:"LABEL_DETECTION",
                  maxResults:10
                }
              ]
            }
          ]
        });

        return res;

      };

      componentDidMount() {
        const allKeywords = [];
        const keywordArray = ["whiteboard", "shoe", "desk", "window"]
        imageFiles.imageFiles.forEach(img => {
          if (this.isImage(img)) {
            this.getLabels(img).then(result => {
              const results = result.data.responses[0].labelAnnotations;
              let labels = [];
              if (results) {
                labels = results.map(result => {
                  return result.description;
                }); 
                allKeywords.push(labels);
              } else {
                labels.push("No labels found.")
              }
              const suggestedKeywords = keywordArray.map(keyword => {
                let count = 0;
                allKeywords.forEach(arr => {
                  arr.forEach(val => {
                    if(val === keyword) {
                      count++
                    }
                  })
                })
              return [keyword, count]
              })

              //Add image URI and labels to the state 
              this.setState({images:[...this.state.images, {img, labels}]});
              this.setState({filteredImages:[...this.state.filteredImages, {img, labels}]});
              this.setState({suggestedKeywords:suggestedKeywords});
            });
          } else {
            //do nothing
          }
          })
      }

      isImage = (filename) => {
          var ext = this.getExtension(filename);
          switch (ext.toLowerCase()) {
          case 'jpg':
          case 'gif':
          case 'bmp':
          case 'png':
              //etc
              return true;
          }
          return false;
      }

      getExtension = (filename) => {
          var parts = filename.split('.');
          return parts[parts.length - 1];
      }

      onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        let filteredImages = this.state.images.filter(image => {
          return image.labels.join("").includes(this.state.searchfield.toLowerCase());
        });
        this.setState({filteredImages});
      }

      onKeywordChange(name) {
        this.setState({searchfield: name});
        let filteredImages = this.state.images.filter(image => {
          console.log(this.state.searchfield);
          return image.labels.join("").includes(name.toLowerCase());
        });
        this.setState({filteredImages});
      }

      render() {
        if (this.state.images.length === 0) {
          return (
            <div className="loading">
              <h1>Loading...</h1>
            </div>
            )
        } else {
          return (
            <React.Fragment>
            <Grid className="container-fluid header-grid">
              <Header>
                <SearchBox searchChange={this.onSearchChange}/>
                <KeywordList keywords={this.state.suggestedKeywords} keywordChange={this.onKeywordChange}/>
              </Header>
            </Grid>
            <Grid className="container-fluid">
              <CardList images={this.state.filteredImages} />
            </Grid>
            </React.Fragment>
          )}
      }

    }

    export default App;