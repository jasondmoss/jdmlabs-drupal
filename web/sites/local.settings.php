<?php

// @codingStandardsIgnoreFile

use Drupal\Component\Assertion\Handle;

/**
 * @file
 * Local development override configuration feature.
 *
 * To activate this feature, copy and rename it such that its path plus
 * filename is 'sites/default/settings.local.php'. Then, go to the bottom of
 * 'sites/default/settings.php' and uncomment the commented lines that mention
 * 'settings.local.php'.
 *
 * If you are using a site name in the path, such as 'sites/example.com', copy
 * this file to 'sites/example.com/settings.local.php', and uncomment the lines
 * at the bottom of 'sites/example.com/settings.php'.
 */


$databases['default']['default'] = array (
  'database' => 'jdmlabs_d10',
  'username' => 'me',
  'password' => 'I1mMtq6V4sB2L',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'driver' => 'mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);
$settings['config_sync_directory'] = 'sites/default/files/config_akuIIbqZvKzuRw40iHapfywAsodFBSnYrQBS3XXaqj-tdmbQExII2v5mjgC6GHXaG1oTbDy_Lg/sync';


ini_set('max_execution_time', 0);

assert_options(ASSERT_ACTIVE, TRUE);
Handle::register();

//$settings['update_free_access'] = TRUE;
//$settings['update_fetch_with_http_fallback'] = TRUE;

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/local.services.yml';
$settings['file_public_path'] = DRUPAL_ROOT . 'sites/default/files';
$settings['file_private_path'] = DRUPAL_ROOT . '../private/files/';

$settings['trusted_host_patterns'] = array(
  '^jdmlabs-drupal\.test$',
);

$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

/**
 * Disable caches.
 */
$settings['cache']['bins']['bootstrap'] = 'cache.backend.null';
$settings['cache']['bins']['config'] = 'cache.backend.null';
$settings['cache']['bins']['data'] = 'cache.backend.null';
$settings['cache']['bins']['default'] = 'cache.backend.null';
$settings['cache']['bins']['discovery'] = 'cache.backend.null';
$settings['cache']['bins']['discovery_migration'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
$settings['cache']['bins']['entity'] = 'cache.backend.null';
$settings['cache']['bins']['menu'] = 'cache.backend.null';
$settings['cache']['bins']['migrate'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['rest'] = 'cache.backend.null';
$settings['cache']['bins']['static'] = 'cache.backend.null';
$settings['cache']['bins']['toolbar'] = 'cache.backend.null';

$settings['extension_discovery_scan_tests'] = FALSE;
$settings['skip_permissions_hardening'] = TRUE;

// Set up environment customizations
$config['environment_indicator.indicator']['bg_color'] = '#e10000';
$config['environment_indicator.indicator']['fg_color'] = '#fff';
$config['environment_indicator.indicator']['name'] = 'JdmLabs (Local)';

/* <> */
