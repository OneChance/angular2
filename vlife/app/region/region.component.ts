/// <reference path="../../typings/jquery/jquery.d.ts" />
import { Component, ElementRef, Inject } from '@angular/core';
import { Account } from '../entity/account';
import { Translate } from '../tool/i18n.pipe';
import { RegionService } from './region.service';
import { AppService } from '../app.service';
import { NetMessage } from '../entity/netmessage';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'my-app',
	templateUrl: 'app/region/region.component.html',
	pipes: [Translate],
	providers: [RegionService]
})

export class RegionComponent {

	infoShow:boolean = false;

	constructor(private regionService: RegionService, private appService: AppService, private el: ElementRef) {
		this.regionService.getRegionData().then(netMessage => this.setRegionData(netMessage));
	}

	toProfile() {
		this.appService.routeTo('/profile');
	}

	setRegionData(netMessage: NetMessage) {

		var _component = this;

		if (netMessage.content) {
			jQuery('#treeview5').treeview({
				color: "#18BC9C",
				expandIcon: 'glyphicon glyphicon-chevron-right',
				collapseIcon: 'glyphicon glyphicon-chevron-down',
				nodeIcon: 'fa fa-map-marker',
				data: netMessage.content,
				onNodeSelected: function (event, node) {
					if (!node.nodes) {
						_component.infoShow = true;
					}else{
						_component.infoShow = false;
					}
				}
			});
			var tree = jQuery('#treeview5').treeview(true);
			tree.expandToNode(jQuery.parseJSON(netMessage.content)[0].currentRegion);
		}
	}
}