module.exports = {
	someSidebar: {
		'Documentation':[
			'index'
		],

		'Lamden Vault': [
			'wallet/overview',
			{
				'Installation': [
					'wallet/first_vault_install',
					'wallet/first_vault_create',
					'wallet/first_vault_restore'
				]
			},
			'wallet/lock_unlock',
			{
				'Accounts': [
					'wallet/accounts_overview',
					'wallet/accounts_creation',
					'wallet/accounts_copy_address',
					'wallet/accounts_delete'
				],
				'Linked Accounts': [
					'wallet/accounts_linked_overview',
					'wallet/accounts_linked_create',
					'wallet/accounts_linked_approval',
					'wallet/accounts_linked_transfer',
					'wallet/accounts_linked_revoke'
				],
				'Dapp Connections': [
					'wallet/dapp_connections_overview',
					'wallet/dapp_connections_change'
				],
				'Tokens': [
					'wallet/tokens_add_token', 
					'wallet/tokens_edit_token',
					'wallet/tokens_delete_token',
					'wallet/tokens_transfer_token'
				],
				'Transactions': [
					'wallet/transactions_overview',
					'wallet/transactions_create',
					'wallet/transactions_advanced_create',
					'wallet/transactions_result'
				],
				'Smart Contract IDE':[
					'wallet/ide_overview',
					'wallet/ide_create_smartcontracts',
					'wallet/ide_submit_smartcontract',
					'wallet/ide_run_smartcontracts'
				],
				'Settings':[{
					'Backup Keys': [
						'wallet/backup_overview',
						'wallet/backup_recovery_phrase',
						'wallet/backup_keystore',
						'wallet/backup_view_keys'
					],
					'Restore Keys': [
						'wallet/restore_recovery_phrase',
						'wallet/restore_keystore',
						'wallet/restore_linked_account'
					],
					'Manage Networks': [
						'wallet/network_overview',
						'wallet/change_network',
						'wallet/manage_network'
					]
				},
				'wallet/settings_changepassword'
				],
			}
		],
		'Developers':[
			{
				type: 'link',
				label:'Contracting',
				href: 'https://contracting.lamden.io/'
			},
			{
				'Lamden Vault API':[
					'develop/wallet_api/overview',
					'develop/wallet_api/create_connection',
					'develop/wallet_api/customize_connection',
					'develop/wallet_api/get_wallet_info',
					'develop/wallet_api/send_transactions',
					'develop/wallet_api/approval_transactions'
				]
			},
			{
				'Lamden Vault Controller':[
					'develop/wallet_controller/wallet_controller_quickstart',
					'develop/wallet_controller/wallet_controller_api',
				]
			},
			{
				'Blockchain': [
					{
						type: 'link',
						label:'General Architecture',
						href: 'https://architecture.lamden.io/intro/'
					},
					{
						type: 'link',
						label:'Nodes',
						href: 'https://architecture.lamden.io/nodes/'
					},
					{
						type: 'link',
						label:'Governance',
						href: 'https://architecture.lamden.io/governance/'
					},
					'develop/blockchain/current_masternodes',
					'develop/blockchain/masternode_api',
					//'develop/blockchain/transactions'
				]
			},
			{
				'Blockservice': [
					'develop/blockservice/overview',
					'develop/blockservice/estimation_installation',
					'develop/blockservice/installation',
					'develop/blockservice/config',
					'develop/blockservice/restful',
					'develop/blockservice/events',
				]
			},
			{
				'Languages' : [
					{
						'Javascript':[
							{
								'Lamden-js': [
									'develop/lamden_js/overview',
									'develop/lamden_js/wallets',
									'develop/lamden_js/network',
									'develop/lamden_js/transactions',
									'develop/lamden_js/masternode_api_wrapper'
								]
							}

						]
					},
					{
						'C#': [
							'develop/unity_3d/unity_3d'
						]
					}
					
				]
			}
			
		]
	}
};
