import { Component } from 'react';
import PropTypes from 'prop-types';
import { getArticle } from '../api';

export default class Article extends Component {
    static propTypes = {
        teamId: PropTypes.string.isRequired,
        articleId: PropTypes.string.isRequired,
        children: PropTypes.func.isRequired
    }

    state = {
        article: null
    }

    componentDidMount() {
        const { teamId, articleId } = this.props;
        this.fetchArticles(teamId, articleId);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.articleId !== nextProps.articleId)
            this.fetchArticles(nextProps.teamId, nextProps.articleId);
    }

    fetchArticles = (teamId, articleId) => {
        this.setState({article: null});

    getArticle(teamId, articleId)
        .then((article) => this.setState({article: article}));

    }

    render() {
        return this.props.children(this.state.article);
    }
}