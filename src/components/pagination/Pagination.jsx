import React from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CustomTooltip from "../tooltip/Tooltip";
import './style.css'

const defaultButton = props => <button {...props}>{props.children}</button>;

export default class Pagination extends React.Component {
    constructor(props) {
        super();

        console.log("total pages: " + props.pages)

        this.changePage = this.changePage.bind(this);

        this.state = {
            visiblePages: this.getVisiblePages(null, props.pages),//array
            dropdownOpen: false,
            selectedPageSize: props.pageSizes[0]
        };


        this.toggle = this.toggle.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this)

    }

    static propTypes = {
        pages: PropTypes.number,
        page: PropTypes.number,
        PageButtonComponent: PropTypes.any,
        onPageChange: PropTypes.func,
        previousText: PropTypes.string,
        nextText: PropTypes.string
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.pages !== nextProps.pages) {
            this.setState({
                visiblePages: this.getVisiblePages(null, nextProps.pages)
            });
        }

        this.changePage(nextProps.page + 1);
    }

    filterPages = (visiblePages, totalPages) => {
        return visiblePages.filter(page => page <= totalPages);
    };

    getVisiblePages = (page, total) => {
        if (total < 7) {
            return this.filterPages([1, 2, 3, 4, 5, 6], total);
        } else {
            if (page % 5 >= 0 && page > 4 && page + 2 < total) {
                return [1, page - 1, page, page + 1, total];
            } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
                return [1, total - 3, total - 2, total - 1, total];
            } else {
                return [1, 2, 3, 4, 5, total];
            }
        }
    };

    changePage(page) {
        const activePage = this.props.page + 1;

        if (page === activePage) {
            return;
        }

        const visiblePages = this.getVisiblePages(page, this.props.pages);

        this.setState({
            visiblePages: this.filterPages(visiblePages, this.props.pages)
        });

        this.props.onPageChange(page - 1);
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    handlePageSizeChange(e) {
        this.setState({ selectedPageSize: e.currentTarget.textContent })
        this.props.onPageChange(0)
        this.props.setPageSize(e.currentTarget.textContent)
    }




    render() {
        const { PageButtonComponent = defaultButton } = this.props;
        const { visiblePages } = this.state;
        const activePage = this.props.page + 1;

        // alert("length:" + this.props.pageSizes)

        return (
            <div className="pagination-wrapper" style={{}}>
                <div style={{ display: "flex", flexDirection: "row", }}>
                    <span>Rows per Page:</span>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction="up">
                        <DropdownToggle caret>
                            {this.state.selectedPageSize}
                        </DropdownToggle>
                        <DropdownMenu>
                            {
                                this.props.pageSizes.map(pageSize =>
                                    <DropdownItem onClick={this.handlePageSizeChange}>{pageSize}</DropdownItem>
                                )
                            }


                        </DropdownMenu>
                    </Dropdown>
                </div>

                <div className="Table__pagination">
                    <div className="Table__prevPageWrapper">
                        <PageButtonComponent
                            className="Table__pageButton"
                            onClick={() => {
                                if (activePage === 1) return;
                                this.changePage(activePage - 1);
                            }}
                            disabled={activePage === 1}
                        >

                            <i class="ri-arrow-left-s-line" id="arrowLeft"></i>
                            <CustomTooltip targetElementId="arrowLeft" text={"Prev"} position="left" />
                            {/* {this.props.previousText} */}
                        </PageButtonComponent>
                    </div>
                    <div className="Table__visiblePagesWrapper">
                        {visiblePages.map((page, index, array) => {
                            return (
                                <PageButtonComponent
                                    key={page}
                                    className={
                                        activePage === page
                                            ? "Table__pageButton Table__pageButton--active"
                                            : "Table__pageButton"
                                    }
                                    onClick={this.changePage.bind(null, page)}
                                >
                                    {array[index - 1] + 2 < page ? `...${page}` : page}
                                </PageButtonComponent>
                            );
                        })}
                    </div>
                    <div className="Table__nextPageWrapper">
                        <PageButtonComponent
                            className="Table__pageButton"
                            onClick={() => {
                                if (activePage === this.props.pages) return;
                                this.changePage(activePage + 1);
                            }}
                            disabled={activePage === this.props.pages}
                        >
                            <i class="ri-arrow-right-s-line" id="arrowRight"></i>
                            <CustomTooltip targetElementId="arrowRight" text={"Next"} position="right" />
                            {/* {this.props.nextText} */}
                        </PageButtonComponent>
                    </div>
                </div>
            </div >
        );
    }
}
