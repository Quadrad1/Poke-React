import React from 'react';
import PagesItem from './PagesItem'
class Pagination extends React.Component{
    constructor(){
        super();
        this.state = {
            pages:[]
        }
    }
    componentWillMount(){
        let pages = [];
        for(let i=1;i<=this.props.mount / 4;i++){
            pages.push(i);
        }
        this.setState({
            pages 
        });
        console.log('this.state.pages ' + this.state.pages);
    }
    handleClick=(id)=>{
        this.props.handleCerrentPage(id);
    }
        render(){
            return(
                <div className="pagination">
                {
                    this.state.pages.map((page)=>{
                        return <PagesItem 
                                    key={page}
                                    currentPage={this.props.currentPage} 
                                    id={page}
                                    onhandle={this.handleClick}
                                    className="pagination__number" 
                                />
                    })
                }
                    
                </div>
            );
        }
    
}
export default Pagination;