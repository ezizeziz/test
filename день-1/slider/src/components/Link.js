import React, { Component } from 'react';
import styled from 'styled-components';

//``; компоненты
const StyledLink = styled.a`
	color: ${props => props.active ? 'pink' : '#fff'};
	font-size: 14px;
	font-weight: 300;
	line-height: 24px;
	padding-right: 33px;
	border-right: 1px dotted #fff;

	&:hover {
		color: red;
		text-decoration: none;
		font-size: 20px;
	}
	&:last-child {
		border-right: none;
	}
`;


class Link extends React.Component{
	render () {
		return (
				<StyledLink href={this.props.link}> {this.props.text}</StyledLink>
			);
	}
}

export default Link;